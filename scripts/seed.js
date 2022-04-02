import { db } from 'api/src/lib/db'

export default async () => {
  try {
    const posts = [
      {
        id: 1,
        title: 'Welcome to the blog!',
        body: "I'm baby single- origin coffee kickstarter lo - fi paleo skateboard.Tumblr hashtag austin whatever DIY plaid knausgaard fanny pack messenger bag blog next level woke.Ethical bitters fixie freegan,helvetica pitchfork 90's tbh chillwave mustache godard subway tile ramps art party. Hammock sustainable twee yr bushwick disrupt unicorn, before they sold out direct trade chicharrones etsy polaroid hoodie. Gentrify offal hoodie fingerstache.",
      },
      {
        id: 2,
        title: 'A little more about me',
        body: "Raclette shoreditch before they sold out lyft. Ethical bicycle rights meh prism twee. Tote bag ennui vice, slow-carb taiyaki crucifix whatever you probably haven't heard of them jianbing raw denim DIY hot chicken. Chillwave blog succulents freegan synth af ramps poutine wayfarers yr seitan roof party squid. Jianbing flexitarian gentrify hexagon portland single-origin coffee raclette gluten-free. Coloring book cloud bread street art kitsch lumbersexual af distillery ethical ugh thundercats roof party poke chillwave. 90's palo santo green juice subway tile, prism viral butcher selvage etsy pitchfork sriracha tumeric bushwick.",
      },
      {
        id: 3,
        title: 'What is the meaning of life?',
        body: 'Meh waistcoat succulents umami asymmetrical, hoodie post-ironic paleo chillwave tote bag. Trust fund kitsch waistcoat vape, cray offal gochujang food truck cloud bread enamel pin forage. Roof party chambray ugh occupy fam stumptown. Dreamcatcher tousled snackwave, typewriter lyft unicorn pabst portland blue bottle locavore squid PBR&B tattooed.',
      },
    ]

    for (const post of posts) {
      await db.post.upsert({
        where: { id: post.id },
        create: { id: post.id, title: post.title, body: post.body },
        update: {},
      })

      console.log(`  Seeded "${post.title}"`)
    }
    // TODO: provide way for user to add their hashed password/salt
    // create an admin user
    await db.user.upsert({
      where: { id: 1 },
      create: {
        id: 1,
        email: 'admin@admin.com',
        hashedPassword:
          '8bfb40af37a60874fd038eb3ffb16882ce93f5d84c42534d5dc4d24b1c9bcd39',
        salt: '18def4c24d52742cb16f2d18312883c6',
        roles: 'admin',
      },
      update: {},
    })
    // create a moderator user
    await db.user.upsert({
      where: { id: 2 },
      create: {
        id: 2,
        email: 'moderator@moderator.com',
        hashedPassword:
          '2fbc110bd445dbb4f588c67c7a88f324444fd84716af3ad35ced0b0ebeef4e47',
        salt: 'f0a8a4a7ccbe92563bffa4ca5fc40c3f',
        roles: 'moderator',
      },
      update: {},
    })
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
