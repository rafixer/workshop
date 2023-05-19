<script>
  import axios from 'axios';
  import moment from 'moment';
  import Episode from './episode.svelte';

  let characters = [];
  let activeCharacter = null;

  const load = async () => {
    const { data: { results }} = await axios.get('https://rickandmortyapi.com/api/character');

    characters = results;
  };

  const setCharacter = (id) => {
    activeCharacter = id;
  }

  const clearCharacter = () => {
    activeCharacter = null;
  }

  load();
</script>

<div class="pure-g">
  {#each characters as character}
    <div class="character pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-4">
      <div
        class="character__image"
        on:click={() => setCharacter(character.id)}
        on:keypress={() => setCharacter(character.id)}
      >
        <img src={character.image} alt={character.name}>
      </div>
      <p class="name">{character.name}</p>

      <div class={activeCharacter === character.id ? 'character__description character__description--visible' : 'character__description'}>
        <p>
          Name: <strong>{character.name}</strong>
        </p>

        <p>
          Status: <strong>{character.status}</strong>
        </p>

        <p>
          Species: <strong>{character.species}</strong>
        </p>

        <p>
          Type: <strong>{character.type || 'unknown'}</strong>
        </p>

        <p>
          Gender: <strong>{character.gender}</strong>
        </p>

        <p>
          Origin: <strong>{character.origin.name}</strong>
        </p>

        <p>
          Location: <strong>{character.location.name}</strong>
        </p>

        <p>Episodes:</p>

        <ul>
          {#each character.episode || [] as episode}
            <Episode link={episode}/>
          {/each}
        </ul>

        <p>
          Created: <strong>{moment(character.created).format('MMMM Do YYYY, h:mm:ss a')}</strong>
        </p>

        <button
          type="button"
          class="close"
          on:click={() => clearCharacter()}
        >X</button>
      </div>
    </div>
  {/each}
</div>
