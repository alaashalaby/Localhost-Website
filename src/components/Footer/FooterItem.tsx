import Link from "next/link";
interface ItemProps {
  item: {
    id: number;
    title: string;
    listItems: {
      id: number;
      listData: string[];
    }[];
  };
}
const FooterItem = ({ item }: ItemProps) => {
  return (
    <div>
      <h3 className="text-primaryColor font-semibold mb-3 text-xl">
        {item.title}
      </h3>
      <div>
        {item.listItems.map((listItem) => (
          <ul key={listItem.id} className="flex flex-col gap-2">
            {listItem.listData.map((data) => (
              <li
                key={data}
                className="py-1 text-primaryColor font-medium hover:text-accentColor duration-300"
              >
                <Link href="/">{data}</Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default FooterItem;
