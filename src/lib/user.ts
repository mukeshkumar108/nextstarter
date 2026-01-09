import { prisma } from "./prisma";

export async function getOrCreateUser(params: {
  clerkUserId: string;
  email?: string | null;
}) {
  const { clerkUserId, email } = params;

  const existing = await prisma.user.findUnique({
    where: { clerkUserId },
  });

  if (existing) return existing;

  return prisma.user.create({
    data: {
      clerkUserId,
      email: email ?? undefined,
    },
  });
}
