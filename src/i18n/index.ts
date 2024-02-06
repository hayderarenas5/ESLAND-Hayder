import catalan from "./ca.json"
import spanish from "./es.json"

const LENGUAGES={
    CATALAN: "ca",
    SPANISH: "es"
}

export const getI18n =({currentLocale ='es'}:{currentLocale: string | undefined})=>{
    if (currentLocale=== LENGUAGES.CATALAN) return catalan
    if (currentLocale=== LENGUAGES.SPANISH) return spanish
    return spanish
}
