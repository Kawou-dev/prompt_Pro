type StyleOptions = {
  color?: string;        // exemple: "text-red-500"
  bold?: boolean;
  underline?: boolean;
  align?: "left" | "center" | "right";
};

function StyledText({
  text,
  highlights,
}: {
  text: string;
  highlights: { word: string; style: StyleOptions }[];
}) {
  // Fonction pour appliquer les styles Tailwind
  const applyStyles = (style: StyleOptions) => {
    let classes = "";
    if (style.color) classes += `${style.color} `;
    if (style.bold) classes += "font-bold ";
    if (style.underline) classes += "underline ";
    if (style.align) classes += `text-${style.align} `;
    return classes.trim();
  };

  // On commence avec tout le texte en un seul bloc
  let elements: React.ReactNode[] = [text];

  // Pour chaque mot à styliser
  highlights.forEach(({ word, style }) => {
    const newElements: React.ReactNode[] = [];
    elements.forEach((el) => {
      if (typeof el === "string") {
        const parts = el.split(new RegExp(`(${word})`, "gi"));
        parts.forEach((part, i) => {
          if (part.toLowerCase() === word.toLowerCase()) {
            newElements.push(
              <span key={i + Math.random()} className={applyStyles(style)}>
                {part}
              </span>
            );
          } else {
            newElements.push(part);
          }
        });
      } else {
        newElements.push(el);
      }
    });
    elements = newElements;
  });

  return <pre className="whitespace-pre-wrap font-['JetBrains_Mono',monospace]     ">{elements}</pre>;
}
export default StyledText;