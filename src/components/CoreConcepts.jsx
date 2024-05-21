import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data"
import { Section } from "./Section"

export function CoreConcepts(){

    return(
        <>
        <Section title="Core Concepts" id="core-concepts">
         <ul>
          {CORE_CONCEPTS.map((conecept, index) =>  ( <CoreConcept key={index} {...conecept} />))}
         </ul>
        </Section>
        </>
    )
}