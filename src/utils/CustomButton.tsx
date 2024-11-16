import { Button } from "@/components/ui/button";

export default function CustomButton({ text }: { text: string }) {
  return (
    <Button
      type="submit"
      className="rounded-sm bg-accentColor border-[1px] border-accentColor py-3 px-4  hover:bg-transparent hover:text-accentColor transition-all duration-500 ease-in-out"
    >
      {text}
    </Button>
  );
}
