export function renderSocialLink() {
  const linkData = [
    {
      linkAddress: "https://www.linkedin.com/in/rohan-korake-720848342/",
      hoverColor: "bg-blue-500/80",
      icon: "fa-brands fa-linkedin-in text-xl",
    },
    {
      linkAddress: "https://github.com/Rohan-Korake",
      hoverColor: "bg-cyan-500/80",
      icon: "fa-brands fa-github text-xl",
    },
    {
      linkAddress: "https://x.com/RohanKorake",
      hoverColor: "bg-cyan-500/80",
      icon: "fa-brands fa-x-twitter text-xl",
    },
    {
      linkAddress: "mailto:rohannkorake@gmail.com",
      hoverColor: "bg-emerald-500/80",
      icon: "fa-solid fa-envelope text-xl",
    },
    {
      linkAddress: "https://rohankorake.vercel.app",
      hoverColor: "bg-violet-500/80",
      icon: "fa-solid fa-globe text-xl",
    },
  ];

  //   render footer social links
  const socialLinkContainer = document.getElementById("socialLinkContainer");
  linkData.forEach((element) => {
    socialLinkContainer.innerHTML += `
        <a href=${element.linkAddress} target="_blank" class="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 text-slate-400 hover:text-white hover:${element.hoverColor} transition-all duration-300 hover:-translate-y-1">
            <i class="${element.icon}"></i>
        </a>
    `;
  });
}
