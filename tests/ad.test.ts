import {AdRecord} from "../records/ad.record";
import {pool} from "../utils/db";
import {AdEntity} from "../types";

afterAll(async () => {
    await pool.end();
});

test('AdRecord returns data from database for one entry.', async () => {
   const ad = await AdRecord.getOne('381bb89a-d5ed-11ec-a213-3c970e36e30f');

   expect(ad).toBeDefined();
   expect(ad.id).toBe('381bb89a-d5ed-11ec-a213-3c970e36e30f');
   expect(ad.name).toBe('Testowa');
   //...

});

test('AdRecord.getOne returns null from database for unexisting entry.', async () => {
    const ad = await AdRecord.getOne('---');

    expect(ad).toBeNull();
});

test('AdRecord.findAll returns array of found entries.', async () => {
    const ads = await AdRecord.findAll('');

    expect(ads).not.toEqual([]);
    expect(ads[0]).toBeDefined();

});

test('AdRecord.findAll returns array of found entries when searching for "a".', async () => {
    const ads = await AdRecord.findAll('a');

    expect(ads).not.toEqual([]);
    expect(ads[0]).toBeDefined();

});

test('AdRecord.findAll returns empty array when searching for something that does not exist.', async () => {
    const ads = await AdRecord.findAll('-------------');

    expect(ads).toEqual([]);


});

test('AdRecord.findAll returns smaller amount of data.', async () => {
    const ads = await AdRecord.findAll('');

    expect((ads[0]as AdEntity).id).toBeDefined();
    expect((ads[0]as AdEntity).price).toBeUndefined();
    expect((ads[0]as AdEntity).description).toBeUndefined();


});