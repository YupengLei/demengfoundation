const Section = (props) => {
    return (
        <div className={props.className}>
            <div className="o-contentBlocks__sidebar ">
                <h2 className="o-contentLayout__sidebarTitle">{props.title}</h2>
            </div>

            <div className="o-contentBlocks__body ">
                <div className="m-textBlock  ">
                    <p className="intro">
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section;