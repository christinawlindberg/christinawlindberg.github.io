// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-research-projects",
              title: "Research Projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/";
              },
            },{id: "dropdown-publications",
              title: "Publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-presentations",
              title: "Presentations",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/presentations/";
              },
            },{id: "dropdown-press",
              title: "Press",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/press/";
              },
            },{id: "dropdown-personal",
              title: "Personal",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/personal/";
              },
            },{id: "dropdown-leadership-and-dei",
              title: "Leadership and DEI",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/dei/";
              },
            },{id: "dropdown-application-material",
              title: "Application Material",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/apps/";
              },
            },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/Lindberg_CV.pdf";
          },
        },{id: "post-hubble-captures-a-neighbor-s-colorful-clouds-nasa-science",
      
        title: 'Hubble Captures a Neighbor’s Colorful Clouds - NASA Science <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "This Hubble image features a scene from the Small Magellanic Cloud, a dwarf galaxy located about 200,000 light-years away.",
      section: "Posts",
      handler: () => {
        
          window.open("https://science.nasa.gov/missions/hubble/hubble-captures-a-neighbors-colorful-clouds/", "_blank");
        
      },
    },{id: "post-hubble-examines-stars-ensconced-in-a-cocoon-of-gas-nasa-science",
      
        title: 'Hubble Examines Stars Ensconced in a Cocoon of Gas - NASA Science <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "This Hubble image features the open cluster of stars NGC 460 located in a region of the Small Magellanic Cloud, a satellite galaxy of the Milky Way.",
      section: "Posts",
      handler: () => {
        
          window.open("https://science.nasa.gov/missions/hubble/hubble-examines-stars-ensconced-in-a-cocoon-of-gas/", "_blank");
        
      },
    },{id: "post-hubble-captures-a-cosmic-cloudscape-nasa-science",
      
        title: 'Hubble Captures a Cosmic Cloudscape - NASA Science <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "The universe is a dusty place, as this NASA/ESA Hubble Space Telescope image featuring swirling clouds of gas and dust near the Tarantula Nebula reveals.",
      section: "Posts",
      handler: () => {
        
          window.open("https://science.nasa.gov/missions/hubble/hubble-captures-a-cosmic-cloudscape/", "_blank");
        
      },
    },{id: "post-hubble-studies-the-tarantula-nebula-s-outskirts-nasa-science",
      
        title: 'Hubble Studies the Tarantula Nebula’s Outskirts - NASA Science <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "This NASA/ESA Hubble Space Telescope image features a dusty yet sparkling scene from one of the Milky Way’s satellite galaxies, the Large Magellanic Cloud.",
      section: "Posts",
      handler: () => {
        
          window.open("https://science.nasa.gov/missions/hubble/hubble-studies-the-tarantula-nebulas-outskirts/", "_blank");
        
      },
    },{id: "projects-asterogap",
          title: 'AsteroGaP',
          description: "Modeling Sparse Asteroid Lightcurves with Gaussian Processes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/asterogap/";
            },},{id: "projects-massive-stars",
          title: 'Massive Stars',
          description: "Probing Small-Scale ISM Structure around Massive Stars in the Andromeda Galaxy (M31)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/m31/";
            },},{id: "projects-smc-wing",
          title: 'SMC Wing',
          description: "3D Structure of the Interstellar Medium in the Tidally Disrupted Wing of the SMC",
          section: "Projects",handler: () => {
              window.location.href = "/projects/n83/";
            },},{id: "projects-scylla",
          title: 'Scylla',
          description: "A Multi-Headed Attack on Dust Evolution and Star Formation in the Magellanic Clouds",
          section: "Projects",handler: () => {
              window.location.href = "/projects/scylla/";
            },},{id: "projects-werk-squad",
          title: 'Werk SQuAD',
          description: "Diagnosing the Circumgalactic Medium with Quasar Sightlines",
          section: "Projects",handler: () => {
              window.location.href = "/projects/werk_squad/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%72%69%73%74%69%6E%61.%6C%69%6E%64%62%65%72%67@%6C%69%76%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/christinawlindberg", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/christinawilleckelindberg", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-0588-7360", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
