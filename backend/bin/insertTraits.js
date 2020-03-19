const pool = require('../databasePool.js');
const TRAIT = require('../data/traits.json');

TRAIT.forEach(TRAIT => {
  const traitType = TRAIT.type;
  const traitValues = TRAIT.values;

  traitValues.forEach(traitValue => {
    pool.query(`INSERT INTO traits("traitType", "traitValue")
    VALUES($1, $2) RETURNING id`,
    [traitType, traitValue],
    (err, res) => {
      if (err) console.log(err);

      const traitId = res.rows[0].id;

    }
  );
  });
});
