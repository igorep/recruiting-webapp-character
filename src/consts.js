export const ATTRIBUTE_LIST = [
  "Strength",
  "Dexterity",
  "Constitution",
  "Intelligence",
  "Wisdom",
  "Charisma",
];

export const CLASS_LIST = {
  Barbarian: {
    Strength: 14,
    Dexterity: 9,
    Constitution: 9,
    Intelligence: 9,
    Wisdom: 9,
    Charisma: 9,
  },
  Wizard: {
    Strength: 9,
    Dexterity: 9,
    Constitution: 9,
    Intelligence: 14,
    Wisdom: 9,
    Charisma: 9,
  },
  Bard: {
    Strength: 9,
    Dexterity: 9,
    Constitution: 9,
    Intelligence: 9,
    Wisdom: 9,
    Charisma: 14,
  },
};

export const SKILL_LIST = [
  { name: "Acrobatics", attributeModifier: "Dexterity", value: 0, modValue: 0 },
  {
    name: "Animal Handling",
    attributeModifier: "Wisdom",
    value: 0,
    modValue: 0,
  },
  { name: "Arcana", attributeModifier: "Intelligence", value: 0, modValue: 0 },
  { name: "Athletics", attributeModifier: "Strength", value: 0, modValue: 0 },
  { name: "Deception", attributeModifier: "Charisma", value: 0, modValue: 0 },
  { name: "History", attributeModifier: "Intelligence", value: 0, modValue: 0 },
  { name: "Insight", attributeModifier: "Wisdom", value: 0, modValue: 0 },
  {
    name: "Intimidation",
    attributeModifier: "Charisma",
    value: 0,
    modValue: 0,
  },
  {
    name: "Investigation",
    attributeModifier: "Intelligence",
    value: 0,
    modValue: 0,
  },
  { name: "Medicine", attributeModifier: "Wisdom", value: 0, modValue: 0 },
  { name: "Nature", attributeModifier: "Intelligence", value: 0, modValue: 0 },
  { name: "Perception", attributeModifier: "Wisdom", value: 0, modValue: 0 },
  { name: "Performance", attributeModifier: "Charisma", value: 0, modValue: 0 },
  { name: "Persuasion", attributeModifier: "Charisma", value: 0, modValue: 0 },
  {
    name: "Religion",
    attributeModifier: "Intelligence",
    value: 0,
    modValue: 0,
  },
  {
    name: "Sleight of Hand",
    attributeModifier: "Dexterity",
    value: 0,
    modValue: 0,
  },
  { name: "Stealth", attributeModifier: "Dexterity", value: 0, modValue: 0 },
  { name: "Survival", attributeModifier: "Wisdom", value: 0, modValue: 0 },
];

export const DEFAULT_ATTR = {
  Strength: { value: 10, modifier: 0 },
  Dexterity: { value: 10, modifier: 0 },
  Constitution: { value: 10, modifier: 0 },
  Intelligence: { value: 10, modifier: 0 },
  Wisdom: { value: 10, modifier: 0 },
  Charisma: { value: 10, modifier: 0 },
};

export const SKILL_POINTS_MODIFOER = "Intelligence";
