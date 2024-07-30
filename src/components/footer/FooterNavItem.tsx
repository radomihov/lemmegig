
type FooterNavBarProps = {
    name: string;
    link: string;
}
function FooterNavItem({name, link}:FooterNavBarProps) {
    return (
        <li>
            <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
               href={link}>{name}
            </a>
        </li>
    );
}

export default FooterNavItem