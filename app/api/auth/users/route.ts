import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse, userAgent } from "next/server";

export async function POST(req: NextRequest) {
  const prisma = new PrismaClient();
  // const datareq = await req.json();

  try {
    const { email, password } = await req.json();
    const users = await prisma.users.findFirst({
      where: {
        email: email,
      },
      select: {
        id: true,
        email: true,
        nama: true,
        level: true,
        company: true,
      },
    });

    if (!users) {
      return NextResponse.json(null);
    }
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
