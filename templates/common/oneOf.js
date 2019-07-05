module.exports = ({ origin }) => ({
  $meta: { $href: `${origin}/common` },
  type: "array",
  items: {
    type: "object",
    validation: true
  }
});
