export const newList = async () => {
    try {
        const response = await fetch("https://openmusic-fake-api.onrender.com/api/musics");
        
        if (!response.ok) {
            throw new Error('Erro ao carregar a lista de músicas');
        }
        
        const jsonLista = await response.json();
        return jsonLista;
        
    } catch (error) {
        console.error('Erro na requisição:', error);
        return []; // Retorna um array vazio em caso de erro
    }
};




  
  
  
  