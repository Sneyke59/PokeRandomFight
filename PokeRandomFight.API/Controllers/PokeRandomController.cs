using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PokeApiNet;

namespace PokeRandomFight.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PokeRandomController : ControllerBase
    {
        private readonly PokeApiClient _pokeClient;

        public PokeRandomController()
        {
            _pokeClient = new PokeApiClient();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> PokemonById(int id)
        {
            Pokemon p = await _pokeClient.GetResourceAsync<Pokemon>(id);

            return Ok(p);
        }

        [HttpGet("stat/{id}")]
        public async Task<IActionResult> StatById(int id)
        {
            Stat s = await _pokeClient.GetResourceAsync<Stat>(id);

            return Ok(s);
        }

        [HttpGet("specy/{id}")]
        public async Task<IActionResult> SpecyById(int id)
        {
            PokemonSpecies s = await _pokeClient.GetResourceAsync<PokemonSpecies>(id);

            return Ok(s);
        }

        [HttpGet("stats")]
        public async Task<IActionResult> GetStats()
        {
            Stat one = await _pokeClient.GetResourceAsync<Stat>(1);
            Stat two = await _pokeClient.GetResourceAsync<Stat>(2);
            Stat three = await _pokeClient.GetResourceAsync<Stat>(3);
            Stat four = await _pokeClient.GetResourceAsync<Stat>(4);
            Stat five = await _pokeClient.GetResourceAsync<Stat>(5);
            Stat six = await _pokeClient.GetResourceAsync<Stat>(6);

            return Ok(new Stat[] { one, two, three, four, five, six });
        }


        [HttpGet("shapes")]
        public async Task<IActionResult> GetShapes()
        {
            var shapes = new List<PokemonShape>();

            for (int i = 1; i < 15; i++)
            {
                PokemonShape shape = await _pokeClient.GetResourceAsync<PokemonShape>(i);
                shapes.Add(shape);
            }

            return Ok(shapes.ToArray());
        }

        [HttpGet("natures")]
        public async Task<IActionResult> GetNatures()
        {
            var natures = new List<Nature>();

            for (int i = 1; i < 25; i++)
            {
                Nature nature = await _pokeClient.GetResourceAsync<Nature>(i);

                natures.Add(nature);
            }

            return Ok(natures.ToArray());
        }

        [HttpGet("types")]
        public async Task<IActionResult> GetTypes()
        {
            var types = new List<Type>();

            for (int i = 1; i < 19; i++)
            {
                Type type = await _pokeClient.GetResourceAsync<Type>(i);

                types.Add(type);
            }

            return Ok(types.ToArray());
        }
    }
}