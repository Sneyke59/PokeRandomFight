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
    }
}