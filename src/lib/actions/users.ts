"use server";
import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "../prisma";

export async function syncUser() {
  try {
    const clerkUser = await currentUser();
    if (!clerkUser) return null;

    const existingUser = await prisma.user.findUnique({
      where: { clerkId: clerkUser.id },
    });
    if (existingUser) return existingUser;

    const dbUser = await prisma.user.create({
      data: {
        clerkId: clerkUser.id,
        firstName: clerkUser.firstName ?? "",
        lastName: clerkUser.lastName ?? "",
        email: clerkUser.emailAddresses[0].emailAddress,
        phoneNumber: clerkUser.phoneNumbers[0]?.phoneNumber || null,
        password: "", // Placeholder, as password is required
      },
    });
    return dbUser;
  } catch (error) {
    console.error("Error syncing user:", error);
    throw error;
  }
}
