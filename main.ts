// One Star, Five Stars for the Food — make.fun bounty
// u-po-pu-one-star-five-stars-for-the-food-f9166ee7
// Writes a single-sentence alien tourist review of Earth to /output/entry.txt
import { writeFileSync, mkdirSync } from "node:fs";

const entry =
  "One star: the locals worship glowing rectangles and queue for lukewarm coffee — but the tacos were so good I demanded the recipe and a one-way ticket to the chef's home planet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
