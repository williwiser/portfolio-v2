interface Prop {
  logo: string;
  name: string;
}

function Skill(props: Prop) {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 p-2 bg-slate-800 bg-opacity-70 border-2 border-slate-500 rounded-md">
      <img
        src={props.logo}
        alt="skill logo"
        className="size-12 object-contain"
      />
      <h1 className="font-semibold">{props.name}</h1>
    </div>
  );
}

export default Skill;
