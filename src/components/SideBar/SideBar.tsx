const SideBar = ({ items }: { items: { name: string; href: string }[] }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.name}>
          <a role="navigation" href={item.href}>
            {item.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
