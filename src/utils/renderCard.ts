export default function renderCard(id:number, img:string, name:string){
    const componentCardCharacter = `
            <div
                data-character=${id} 
                style="background-image: url(./img/background.jpg);"
                class="hover:scale-[1.04] transition-transform relative cursor-pointer w-[150px] rounded bg-cover bg-center flex justify-center items-center">
                <div 
                    id=${id}
                    class="h-[200px]">
                    <img
                        class="w-full h-full object-contain" 
                        src="${img}" 
                        alt="${name}">
                </div>
                <p class="absolute bottom-[5px] left-[6px] font-medium text-white">${name}</p>
            </div>
        `;
    return componentCardCharacter;
};