export interface Props {
    title: string;
  }
  
  export default function Header({ title }: Props){
    return (
      <div class="bg-blue-500">
        <p class="font-extrabold text-lg">{title}</p>
        <p>teste de componente</p>
      </div>
    );
  }
  