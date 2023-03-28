import Image from "$start/components/atoms/Image.tsx";

export interface aboutProps{
    /** @description  titulo principal */
    title?: string;
    
     /** @description  adicione um novo parágrafo */
    paragraphs: paragraphProps[];
}

export interface paragraphProps{
     /** @description  texto descritivo */
    description?: string;
}

export default function About({title,paragraphs}:aboutProps){
    return(
        <div id="#about" class="flex justify-center items-center">
            <div id="textWrapper">
                <h2>
                    {title}
                </h2>
                {
                    paragraphs?.map(paragraph =>{
                        <p>
                            {paragraph}
                        </p>
                    })
                }
            </div>   
            <div id="sideBannerWrapper">
                <Image 
                    src="images/about.webp"
                    title="irmãos encanadores mario e luigi"
                    altText="irmãos encanadores mario e luigi"
                    className="w-full h-[49vw]"
                />
            </div>
        </div>
    )
}