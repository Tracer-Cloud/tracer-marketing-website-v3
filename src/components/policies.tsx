// import React, { useEffect } from "react";

// const policies = {
//   "terms-of-service": "8c92c763-d155-4f7d-8b15-c29471a317fa",
//   privacy: "91916769-bf31-4659-a1bb-85dda02ebdfb",
//   "cookie-policy": "e0fa4419-df7d-460b-91c8-b26fd1a4d0a6",
// };

// export function TermlyEmbed(props: { policy: keyof typeof policies }) {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://app.termly.io/embed-policy.min.js";
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);
//   return (
//     <div
//       // @ts-expect-error
//       name="termly-embed"
//       data-id={policies[props.policy]}
//       data-type="iframe"
//     ></div>
//   );
// }
