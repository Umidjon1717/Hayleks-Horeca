import { CircularProgress } from "@mui/material";
import { ReactNode, Suspense } from "react";
import { motion } from "framer-motion";

export const Loading = () => {
    return (
        <motion.div
            className="w-full h-screen flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <CircularProgress size={60} />
        </motion.div>
    );
};

export const SuspenseContainer = ({ children }: { children: ReactNode }) => {
    return <Suspense fallback={<Loading />}>{children}</Suspense>;
};
