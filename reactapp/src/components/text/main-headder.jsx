export default function MainHeader({className, children}) {
    return <h1 className={`text-blue text-xl font-semibold ${className} mt-1 `}>{children}</h1>;
}
