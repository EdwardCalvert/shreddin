export default function MainHeader({className, children}) {
    return <h1 className={`text-blue text-xl ${className} mt-1 font-semibold`}>{children}</h1>;
}
