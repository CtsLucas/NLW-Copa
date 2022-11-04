import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'John Doe Silva',
      email: 'john.doe.ss@email.com',
      avatarUrl: 'https://github.com/CtsLucas.png',
    },
  });

  const pool = await prisma.pool.create({
    data: {
      title: 'Example Pool 1',
      code: 'BOL12345',
      ownerId: user.id,

      participants: {
        create: {
          userId: user.id,
        },
      },
    },
  });

  await prisma.game.create({
    data: {
      date: '2022-11-07T12:00:00.509Z',
      firstTeamCountryCode: 'DE',
      secondTeamCountryCode: 'BR',
    },
  });

  await prisma.game.create({
    data: {
      date: '2022-11-07T12:00:00.509Z',
      firstTeamCountryCode: 'DE',
      secondTeamCountryCode: 'BR',

      guesses: {
        create: {
          firstTeamPoints: 2,
          secondTeamPoints: 1,

          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id,
              },
            },
          },
        },
      },
    },
  });
}

main();
