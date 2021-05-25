function NavItem({title, Icon}) {
    return (
        <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-rose">
            <Icon className="h-8 my-1 group-hover:animate-bounce transform"/>
            <p className='opacity-0 group-hover:opacity-100 tracking-widest whitespace-nowrap'>{title}</p>
        </div>
    )
}

export default NavItem
