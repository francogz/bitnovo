import React, { createContext, useContext, useEffect, useState, useRef, ReactNode } from "react";

interface WebSocketContextType {
    status: "pending" | "success" | "error";
    messagesLog: string[];
    setIdentifier: (id: string) => void;
}

interface WebSocketProviderProps {
    children: ReactNode;
}

const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({ children }) => {
    const [identifier, setIdentifier] = useState<string>("");
    const [status, setStatus] = useState<"pending" | "success" | "error">("pending");
    const [messagesLog, setMessagesLog] = useState<string[]>([]);
    const socketRef = useRef<WebSocket | null>(null);

    const updateIdentifier = (id: string) => {
        setIdentifier(id);
        setStatus("pending");
        setMessagesLog([]);
    };

    useEffect(() => {
        if (!identifier) return;

        // Cerrar la conexión anterior si existe
        if (socketRef.current) {
            socketRef.current.close();
        }

        console.log("WebSocket identifier", identifier);

        // Crear una nueva conexión WebSocket
        const socket = new WebSocket(`wss://payments.pre-bnvo.com/ws/merchant/${identifier}`);
        socketRef.current = socket;

        socket.onopen = () => {
            console.log("WebSocket conexión abierta");
        };


        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            setMessagesLog((prevLogs) => [...prevLogs, JSON.stringify(message)]);

            if (message.status === "completed") {
                setStatus("success");
                socket.close();
            } else if (message.status === "expired" || message.status === "failed") {
                setStatus("error");
                socket.close();
            }
        };

        socket.onerror = () => {
            setStatus("error");
        };

        socket.onclose = () => {
            console.log("WebSocket cerrado");
        };

        return () => {
            socket.close();
        };
    }, [identifier]);

    return (
        <WebSocketContext.Provider value={{ status, messagesLog, setIdentifier: updateIdentifier }}>
            {children}
        </WebSocketContext.Provider>
    );
};

export const useWebSocket = () => {
    const context = useContext(WebSocketContext);
    if (context === undefined) {
        throw new Error("ocurrió un error");
    }
    return context;
};
