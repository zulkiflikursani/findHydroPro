import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const admin = await prisma.users.upsert({
    where: { email: "admin@gmail.com" },
    update: {},
    create: {
      email: "admin@gmail.com",
      nama: "admin",
      level: "1",
      password: "admin123",
      company: "1",
      accessToken: undefined,
      refreshToken: undefined,
      no_telpon: "12312313123",
    },
  });
  const company1 = await prisma.users.upsert({
    where: { email: "company1@gmail.com" },
    update: {},
    create: {
      email: "comopany1@gmail.com",
      nama: "company1",
      level: "2",
      password: "admin123",
      company: "1",
      accessToken: undefined,
      refreshToken: undefined,
      no_telpon: "12312313123",
    },
  });
  const company2 = await prisma.users.upsert({
    where: { email: "company2@gmail.com" },
    update: {},
    create: {
      email: "company2@gmail.com",
      nama: "Company2",
      level: "2",
      password: "admin123",
      company: "2",
      accessToken: undefined,
      refreshToken: undefined,
      no_telpon: "12312313123",
    },
  });
  const pemda = await prisma.users.upsert({
    where: { email: "pemda@gmail.com" },
    update: {},
    create: {
      email: "pemda@gmail.com",
      nama: "Pemda",
      level: "1",
      password: "admin123",
      company: "1",
      accessToken: undefined,
      refreshToken: undefined,
      no_telpon: "12312313123",
    },
  });
  console.log({ admin, pemda, company1, company2 });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
