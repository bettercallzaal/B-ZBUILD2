import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const bettercallzaal = await prisma.member.upsert({
    where: { slug: "bettercallzaal" },
    update: {},
    create: {
      name: "bettercallzaal",
      slug: "bettercallzaal",
      bio: "A passionate advocate for creator empowerment and a key partner in the Ohnahji & The ZAO collaboration.",
      role: "admin",
      platformLinks: {
        github: "bettercallzaal",
      },
    },
  });

  const ohnahji = await prisma.member.upsert({
    where: { slug: "ohnahji" },
    update: {},
    create: {
      name: "Ohnahji",
      slug: "ohnahji",
      bio: "Web3-native educator and founder of Ohnahji University. Focused on empowering creators through blockchain education.",
      role: "admin",
      platformLinks: {
        github: "ohnahji",
        twitter: "ohnahji",
        youtube: "ohnahji",
        spotify: "ohnahji",
        twitch: "ohnahji",
      },
    },
  });

  console.log("Seeded members:", { bettercallzaal, ohnahji });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
