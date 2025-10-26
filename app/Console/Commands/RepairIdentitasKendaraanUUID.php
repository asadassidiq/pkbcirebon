<?php

namespace App\Console\Commands;

use App\Repositories\IdentitaskendaraanRepository;
use Illuminate\Console\Command;

class RepairIdentitasKendaraanUUID extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:repairuuididentitaskendaraan';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Insert new UUID for Identitas Kendaraan if missing';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        try {
            $this->info('Start Repair Identitas Kendaraan UUID');

            $service = app(IdentitaskendaraanRepository::class);
            $result =  $service->repairUUID();

            if ($result) {
                $this->info('Success Repair Identitas Kendaraan UUID');
                return 0;
            }

            $this->error('Fail Repair Identitas Kendaraan UUID');

            return 0;
        } catch (\Exception $e) {
            $this->error($e->getMessage());
            return 1;
        }
    }
}
