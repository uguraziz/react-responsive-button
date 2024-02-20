import classNames from "classnames";

export default function Button({
  children,
  size = "medium",
  variant = "default",
  ...props
}) {
  return (
    <button
      {...props}
      className={classNames("rounded border font-semibold", {
        "h-8 px-2.5 text-xs": size == "small",
        "h-10 px-4 text-sm": size == "medium",
        "h-14 px-8 text-base": size == "large",

        "bg-zinc-50 border-zinc-300 hover:border-zinc-500 hover:bg-zinc-100 text-zinc-700":
          variant == "default",
        "bg-yellow-50 border-yellow-600/40 hover:border-yellow-500 hover:bg-yellow-100 text-yellow-700":
          variant == "warning",
        "bg-green-50 border-green-600/40 hover:border-green-500 hover:bg-green-100 text-green-700":
          variant == "success",
        "bg-blue-50 border-blue-600/40 hover:border-blue-500 hover:bg-blue-100 text-blue-700":
          variant == "primary",
        "bg-red-50 border-red-600/40 hover:border-red-500 hover:bg-red-100 text-red-700":
          variant == "danger",
      })}
    >
      {children}
    </button>
  );
}
