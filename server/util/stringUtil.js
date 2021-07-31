/**
 * Create slug from string
 */
const slugify = (text, delimiter = "-") => {
  return text.trim().toLowerCase().replace(/\s/g, delimiter);
};
module.exports = {slugify}