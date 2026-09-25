# Registro Recuperi
## 1. Rimozione file dall'indice
- **Comando usato:** git rm --cached file-sbagliato.txt
- **Effetto osservato:** Il file viene rimosso dall'indice (non è più pronto per il commit) ma le modifiche rimangono intatte nell'area di lavoro come file non tracciato.

## 2. Scarto modifiche area di lavoro
- **Comando usato:** git restore <file> (o git checkout -- <file>)
- **Effetto osservato:** Le modifiche non salvate nell'area di lavoro vengono eliminate definitivamente, riportando lo stato del file a quello dell'ultimo commit.
