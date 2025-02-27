#!/usr/bin/env node

import { program } from "commander";

import { parseCss } from "./parse.js";

program
  .version("0.1.0")
  .description("Guvam html/css converter")
  //.option("-a, --animal", "Name of the animal")
  //.requiredOption("-f, --food <food_name>", "The food the animal likes")
  //.argument("<animal_name>", "name of the animal")
  .action(() => parseCss());

program.parse(process.argv);
