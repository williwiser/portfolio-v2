import Skill from "./Skill";
import reactLogo from "./assets/logos/react_logo.png";
import tsLogo from "./assets/logos/ts_logo.png";
import nodeLogo from "./assets/logos/node_logo.svg";
import pgLogo from "./assets/logos/pg_logo.png";
import mysqlLogo from "./assets/logos/mysql_logo.png";
import mongoDBLogo from "./assets/logos/mongodb_logo.png";
import tailwindLogo from "./assets/logos/tailwind_logo.svg";
import javaLogo from "./assets/logos/java_logo.png";
import csharpLogo from "./assets/logos/csharp_logo.png";
function Skills() {
  return (
    <section id="skills" className="w-full overflow-hidden">
      <div className="container mx-auto max-w-screen-xl px-8 pt-10 h-full">
        <h1 className="font-semibold text-6xl text-pretty text-center">
          Skills
        </h1>
        <hr className="border-2 my-5 max-w-10 mx-auto border-teal-500" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <Skill logo={reactLogo} name="React.js" />
          <Skill logo={tsLogo} name="TypeScript" />
          <Skill logo={nodeLogo} name="Node.js" />
          <Skill logo={pgLogo} name="PostgreSQL" />
          <Skill logo={mysqlLogo} name="MySQL" />
          <Skill logo={mongoDBLogo} name="MongoDB" />
          <Skill logo={tailwindLogo} name="Tailwind" />
          <Skill logo={javaLogo} name="Java" />
          <Skill logo={csharpLogo} name="C# (Learning)" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
