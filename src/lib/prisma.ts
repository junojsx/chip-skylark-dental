import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

//when using nextJS, everytime you modify a file, you instantly see the changes. And everytime you save the change, it creates new PrismaClients.
//HOT RELOAD - creates a bunch of prisma clients

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
//when we're not in production, we store that in globalthis, so those changes are not affected by HOTRELOAD to prevent
//unnecessary prismaclients from being created
export const prisma = db;
//exporting prisma client
//this is how we connect to the database
//we can import prisma from this file anywhere in the app
//and use it to query the database
