import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MOGODB_URL!;

interface MogooseConn {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MogooseConn = (global as any).MogooseConn;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connect = async () => {
    if (cached.conn) return cached.conn;
  
    cached.promise =
      cached.promise ||
      mongoose.connect(MONGODB_URL, {
        dbName: "clerkv5nextjs",
        bufferCommands: false,
        connectTimeoutMS: 30000,
      });

  cached.conn = await cached.promise;

  return cached.conn;
};
