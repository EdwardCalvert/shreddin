export default function StickyBottomButton({text, onClick, enabled=true}){
    return <button className={`fixed bottom-24  w-[calc(100%-2em)] h-10 ${enabled? "bg-gold text-white":"bg-gold-dark text-black cursor-not-allowed"} rounded-full  mt-4 max-w-screen-md mx-auto p-0`} onClick={() => onClick()}>
        {text}
    </button>
}