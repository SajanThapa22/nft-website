import user from "../assets/images/avatar2.png";

interface Props {
  text: string;
}

const User = ({ text }: Props) => {
  return (
    <div className="flex gap-2">
      <div className="w-10 aspect-square rounded-full overflow-hidden">
        <img src={user} className="w-full" alt="" />
      </div>

      <div className="flex flex-col justify-between">
        <p className="text-txt-clr text-sm font-semibold capitalize">name</p>
        <p className="text-txt-clr text-sm">{text}</p>
      </div>
    </div>
  );
};

export default User;
