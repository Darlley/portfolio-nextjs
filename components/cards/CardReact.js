import { useState } from "react";

const { default: Image } = require("next/image");

function CardReact ({setModalState}) {
    return (
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-opacity-50 bg-primary-500"  onClick={() => setModalState(0)} >
            <div className="flex flex-col items-center gap-4 bg-white w-[90%] px-4 py-10 rounded-2xl max-w-[400px]">
                <Image
                    src="/habilities/React.png"
                    alt="Picture of the author"
                    width={60}
                    height={60}
                />
                <h2 className="text-2xl font-bold text-primary-500">ReactJS</h2>

                <p>Além deste repositório em particular, também criei o Design System da empresa LeadsZapp (onde estou empregado no momento).<br />
                Tenho certificação dos cursos:<br />
                - PRO FIGMA | Design de interface do Iniciante<br />
                ao especialista<br />
                - Curso Online UI Start<br />
                - Curso Online UI Expert<br />
                <a href="#" className="inline-block mt-4 font-bold transition-colors text-secundary-500 hover:text-secundary-900">Saber mais</a>
                </p>
            </div>
        </div>
    )
}

export default CardReact;