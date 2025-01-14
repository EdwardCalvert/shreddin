export default function StickyBottomButton({text, onClick}){
    return <button className="fixed bottom-24 left-0 w-[calc(100%-2em)] h-10 bg-gold rounded-full text-white mt-4 ml-4 " onClick={() => onClick()}>
        {text}
    </button>
}