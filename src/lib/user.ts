import { prisma } from "./prisma";

export async function getOrCreateUser(params: {
  clerkUserId: string;
  email?: string | null;
}) {
  const { clerkUserId, email } = params;

  return prisma.user.upsert({
    where: { clerkUserId },
    update: { email: email ?? undefined },
    create: { clerkUserId, email: email ?? undefined },
  });
}
