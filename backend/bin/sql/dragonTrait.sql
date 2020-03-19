CREATE TABLE dragonTrait(
  "traitId" INTEGER,
  "dragonId" INTEGER,
  FOREIGN KEY ("traitId") REFERENCES traits(id),
  FOREIGN KEY ("dragonId") REFERENCES dragon(id)
);
