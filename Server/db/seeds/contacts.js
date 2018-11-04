
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('contactsTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('contactsTable').insert([
        { name: "Lanni", email: '"lshilton0@odnoklassniki.ru"' },
        { name: "Weidar", email: "wnewson1@comsenz.com" },
        { name: "Mayne", email: "mcardero2@oracle.com" },
        { name: "Kerianne", email: "kdemerida3@constantcontact.com" },
        { name: "Rickard", email: "radamczyk4@gmpg.org" },
        { name: "Lolly", email: "lcecchi5@wunderground.com" },
        { name: "Herold", email: "hthredder6@skype.com" },
        { name: "Joyce", email: "jmccafferky7@utexas.edu" },
        { name: "Gene", email: "gdewdeny8@tinypic.com" },
        { name: "Camile", email: "cfitzackerley9@skype.com" },
        { name: "Heinrik", email: "hgrimolbiea@nature.com" },
        { name: "Edita", email: "ebernardottib@ocn.ne.jp" },
        { name: "Hetti", email: "htewkesburyc@spiegel.de" },
        { name: "Connie", email: "cblanchetd@cbsnews.com" },
        { name: "Charline", email: "cclipsone@woothemes.com" },
        { name: "Katya", email: "kfulbrookf@altervista.org" },
        { name: "Quinn", email: "qfouldesg@friendfeed.com" },
        { name: "Peg", email: "pmclavertyh@example.com" },
        { name: "Xenia", email: "xlightbournei@cam.ac.uk" },
        { name: "Crystal", email: "ckenenj@studiopress.com" },
        { name: "Doe", email: "dmccollumk@nydailynews.com" },
        { name: "Lynne", email: "lmyhanl@wordpress.org" },
        { name: "Fancie", email: "fferraom@chron.com" },
        { name: "Ernesto", email: "erodenburgn@bravesites.com" },
        { name: "Kaja", email: "ktrayteo@macromedia.com" }
      ]);
    });
};
