import {AdRecord} from "../records/ad.record";

test('AdRecord returns data from database for one entry.', async () => {
   const ad = await AdRecord.getOne('381bb89a-d5ed-11ec-a213-3c970e36e30f');

   expect(ad).toBeDefined();
   expect(ad.id).toBe('381bb89a-d5ed-11ec-a213-3c970e36e30f');
   expect(ad.name).toBe('Testowa');
   //...

});

test('AdRecord returns null from database for unexisting entry.', async () => {
    const ad = await AdRecord.getOne('---');

    expect(ad).toBeNull();
});