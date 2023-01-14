/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "doc",
      label: "Introduction",
      id: "introduction",
    },
    {
      type: "category",
      label: "Installation",
      collapsed: false,
      items: [
        "installation/linux",
        "installation/docker",
        "installation/windows",
        "installation/macos",
      ],
    },
    {
      type: "category",
      label: "Configuration",
      collapsed: false,
      items: [
        "configuration/simple",
        "configuration/c2",
      ],
    },
    {
      type: "category",
      label: "Modules",
      collapsed: false,
      items: [
        "modules/general",
        "modules/dns",
        "modules/terraform",
        "modules/users",
        {
          type: "category",
          label: "Virtual Machine",
          collapsed: true,
          items: [
            "modules/vm/options",
            "modules/vm/firewall",
            "modules/vm/traefik",
            "modules/vm/neo4j",
            "modules/vm/nighthawk",
            "modules/vm/cobaltstrike",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Providers",
      collapsed: false,
      items: [
        "providers/current",
        "providers/planned",
      ],
    },
    {
      type: "doc",
      label: "Secrets",
      id: "secrets",
    },
  ],
};

module.exports = sidebars;
